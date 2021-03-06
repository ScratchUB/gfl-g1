function Player(level) {
    this.position = level.getStart()
    this.movementVector = new Vec2(0,0); //stores last movement vector
    
    this.move = (buttons) => {
        const movement = new Vec2(0,0);

        if (buttons.up) movement.y -= Settings.playerSpeed;
        if (buttons.down)  movement.y += Settings.playerSpeed;
        if (buttons.left) movement.x -= Settings.playerSpeed;
        if (buttons.right) movement.x += Settings.playerSpeed;

        this.movementVector = level.interact(this.position, Settings.playerRadius, movement)
        this.position = this.position.add(this.movementVector);

        return this.movementVector;
    }
}