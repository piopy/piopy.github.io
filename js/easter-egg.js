// Easter Egg: Space Invaders Game (Ctrl + ù)
(function() {
    let gameActive = false;
    let gameContainer = null;
    
    // Detect Ctrl + ù
    document.addEventListener('keydown', function(e) {
        // ù key code può variare, controlliamo sia keyCode che key
        if (e.ctrlKey && (e.key === 'ù' || e.code === 'Backquote' || e.keyCode === 192 || e.keyCode === 222)) {
            e.preventDefault();
            if (gameActive) {
                closeGame();
            } else {
                openGame();
            }
        }
        
        // ESC per chiudere
        if (e.key === 'Escape' && gameActive) {
            closeGame();
        }
    });
    
    function openGame() {
        gameActive = true;
        
        // Crea overlay
        gameContainer = document.createElement('div');
        gameContainer.id = 'space-invaders-game';
        gameContainer.innerHTML = `
            <div class="game-overlay">
                <div class="game-header">
                    <h2>SPACE INVADERS</h2>
                    <button class="game-close" onclick="window.closeSpaceInvaders()">×</button>
                </div>
                <canvas id="gameCanvas" width="800" height="600"></canvas>
                <div class="game-controls">
                    <p><strong>Controls:</strong> Arrow Keys ← → to move, SPACE to shoot, ESC to close</p>
                    <p id="game-score">Score: 0</p>
                </div>
            </div>
        `;
        
        document.body.appendChild(gameContainer);
        
        // Avvia il gioco
        initGame();
    }
    
    function closeGame() {
        gameActive = false;
        if (gameContainer) {
            gameContainer.remove();
            gameContainer = null;
        }
    }
    
    // Esponi la funzione close globalmente per il bottone
    window.closeSpaceInvaders = closeGame;
    
    function initGame() {
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        
        // Game state
        let score = 0;
        let gameOver = false;
        
        // Player
        const player = {
            x: canvas.width / 2 - 25,
            y: canvas.height - 60,
            width: 50,
            height: 30,
            speed: 5
        };
        
        // Bullets
        let bullets = [];
        const bulletSpeed = 7;
        
        // Enemies
        let enemies = [];
        const enemyRows = 4;
        const enemyCols = 8;
        const enemyWidth = 40;
        const enemyHeight = 30;
        let enemySpeed = 1;
        let enemyDirection = 1;
        
        // Create enemies
        for (let row = 0; row < enemyRows; row++) {
            for (let col = 0; col < enemyCols; col++) {
                enemies.push({
                    x: col * (enemyWidth + 20) + 50,
                    y: row * (enemyHeight + 20) + 50,
                    width: enemyWidth,
                    height: enemyHeight,
                    alive: true
                });
            }
        }
        
        // Controls
        const keys = {};
        
        document.addEventListener('keydown', (e) => {
            keys[e.key] = true;
            
            if (e.key === ' ' && gameActive) {
                e.preventDefault();
                shoot();
            }
        });
        
        document.addEventListener('keyup', (e) => {
            keys[e.key] = false;
        });
        
        function shoot() {
            bullets.push({
                x: player.x + player.width / 2 - 2,
                y: player.y,
                width: 4,
                height: 10
            });
        }
        
        function update() {
            if (gameOver) return;
            
            // Move player
            if (keys['ArrowLeft'] && player.x > 0) {
                player.x -= player.speed;
            }
            if (keys['ArrowRight'] && player.x < canvas.width - player.width) {
                player.x += player.speed;
            }
            
            // Move bullets
            bullets = bullets.filter(bullet => {
                bullet.y -= bulletSpeed;
                return bullet.y > 0;
            });
            
            // Move enemies
            let changeDirection = false;
            enemies.forEach(enemy => {
                if (!enemy.alive) return;
                
                enemy.x += enemySpeed * enemyDirection;
                
                if (enemy.x <= 0 || enemy.x >= canvas.width - enemy.width) {
                    changeDirection = true;
                }
            });
            
            if (changeDirection) {
                enemyDirection *= -1;
                enemies.forEach(enemy => {
                    if (enemy.alive) {
                        enemy.y += 20;
                    }
                });
            }
            
            // Check collisions
            bullets.forEach((bullet, bulletIndex) => {
                enemies.forEach((enemy, enemyIndex) => {
                    if (enemy.alive &&
                        bullet.x < enemy.x + enemy.width &&
                        bullet.x + bullet.width > enemy.x &&
                        bullet.y < enemy.y + enemy.height &&
                        bullet.y + bullet.height > enemy.y) {
                        
                        enemy.alive = false;
                        bullets.splice(bulletIndex, 1);
                        score += 10;
                        document.getElementById('game-score').textContent = `Score: ${score}`;
                    }
                });
            });
            
            // Check if all enemies defeated
            if (enemies.every(e => !e.alive)) {
                gameOver = true;
                ctx.fillStyle = '#00ff00';
                ctx.font = '48px monospace';
                ctx.fillText('YOU WIN!', canvas.width / 2 - 120, canvas.height / 2);
            }
            
            // Check if enemies reached bottom
            enemies.forEach(enemy => {
                if (enemy.alive && enemy.y + enemy.height >= player.y) {
                    gameOver = true;
                }
            });
            
            if (gameOver && !enemies.every(e => !e.alive)) {
                ctx.fillStyle = '#ff0000';
                ctx.font = '48px monospace';
                ctx.fillText('GAME OVER', canvas.width / 2 - 150, canvas.height / 2);
            }
        }
        
        function draw() {
            // Clear canvas
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Draw player
            ctx.fillStyle = '#00ff00';
            ctx.fillRect(player.x, player.y, player.width, player.height);
            
            // Draw bullets
            ctx.fillStyle = '#ffff00';
            bullets.forEach(bullet => {
                ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
            });
            
            // Draw enemies
            ctx.fillStyle = '#ff0000';
            enemies.forEach(enemy => {
                if (enemy.alive) {
                    ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
                }
            });
        }
        
        function gameLoop() {
            if (!gameActive) return;
            
            update();
            draw();
            requestAnimationFrame(gameLoop);
        }
        
        gameLoop();
    }
})();
