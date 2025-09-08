namespace SpriteKind {
    export const Wall = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Ghost.follow(Pacman, 50)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Ghost.follow(Pacman, 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(Pacman, effects.ashes, 100)
    timer.after(1000, function () {
        game.setGameOverMessage(false, "You Lost Nigga")
        game.gameOver(false)
    })
})
let Ghost: Sprite = null
let Pacman: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
Pacman = sprites.create(assets.image`pacman`, SpriteKind.Player)
Ghost = sprites.create(assets.image`ghost`, SpriteKind.Enemy)
characterAnimations.loopFrames(
Pacman,
assets.animation`pacman`,
100,
characterAnimations.rule(Predicate.Moving)
)
scene.cameraFollowSprite(Pacman)
Ghost.follow(Pacman, 50)
Ghost.setPosition(96, 53)
controller.moveSprite(Pacman)
