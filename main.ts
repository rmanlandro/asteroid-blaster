enum SpriteKindLegacy {
    Player,
    Enemy,
    Laser,
    Asteroid,
    Projectile,
    Food
}
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.Asteroid, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectile(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . 1 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 0, -100, SpriteKindLegacy.Laser, spaceship)
    projectile.z = -1
})
sprites.onOverlap(SpriteKindLegacy.Laser, SpriteKindLegacy.Asteroid, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprite.destroy()
    otherSprite.destroy()
})
let projectile: Sprite = null
let spaceship: Sprite = null
spaceship = sprites.create(img`
. . . . . . f . . . . . . 
. . . . . f b f . . . . . 
. . . . f b b b f . . . . 
. . . . f f f f f . . . . 
. . . . f a a a f . . . . 
. . . . f a a a f . . . . 
. . . . f a a a f . . . . 
. . . f f a a a f f . . . 
. . f b f a a a f b f . . 
. f b b f a a a f b b f . 
f f f f f f f f f f f f f 
. . 5 5 . . . . . 5 5 . . 
`, SpriteKindLegacy.Player)
controller.moveSprite(spaceship)
spaceship.setFlag(SpriteFlag.StayInScreen, true)
spaceship.y += 40
info.setLife(3)
info.setScore(60)
forever(function () {
    projectile = sprites.createProjectile(img`
. . . . . . . . c c c c . . . . 
. . . . c c c c c c c c c . . . 
. . . c f c c a a a a c a c . . 
. . c c f f f f a a a c a a c . 
. . c c a f f c a a f f f a a c 
. . c c a a a a b c f f f a a c 
. c c c c a c c b a f c a a c c 
c a f f c c c a b b 6 b b b c c 
c a f f f f c c c 6 b b b a a c 
c a a c f f c a 6 6 b b b a a c 
c c b a a a a b 6 b b a b b a . 
. c c b b b b b b b a c c b a . 
. . c c c b c c c b a a b c . . 
. . . . c b a c c b b b c . . . 
. . . . c b b a a 6 b c . . . . 
. . . . . . b 6 6 c c . . . . . 
`, Math.randomRange(-50, 50), Math.randomRange(-50, 50), SpriteKindLegacy.Asteroid)
    pause(Math.max(500, 2000 - 30 * info.score()))
})
