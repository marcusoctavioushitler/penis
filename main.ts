controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . 1 1 7 1 1 . . . . . . 
        . . . . 1 1 7 7 7 1 1 . . . . . 
        . . . 1 1 7 7 7 7 7 1 1 . . . . 
        . . 1 1 7 7 7 7 7 7 7 1 1 . . . 
        . . 1 7 7 7 7 7 7 7 7 7 1 . . . 
        . . 1 7 7 7 7 7 7 7 7 7 1 . . . 
        . . 1 1 1 1 7 7 7 1 1 1 1 . . . 
        . . . . . 1 7 7 7 1 . . . . . . 
        . . . . . 1 7 7 7 1 . . . . . . 
        . . . . . 1 7 7 7 1 . . . . . . 
        . . . . . 1 7 7 7 1 . . . . . . 
        . . . . . 1 7 7 7 1 . . . . . . 
        . . . . . 1 7 7 7 1 . . . . . . 
        . . . . . 1 7 7 7 1 . . . . . . 
        . . . . . 1 7 7 7 1 . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        `, mySprite, 0, -50)
})
let BOLA_DE_FUEGO: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
game.splash("\"BENVINGUTS A L'ESPAI\"", "\"APRETA A PER COMENÇAR I B PER DISPARAR\"")
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . f 8 . . . . . . . 
    . . . . . . . f 8 . . . . . . . 
    . . . . . . . f 8 . . . . . . . 
    . . . . . . . 1 f . . . . . . . 
    . . . . . . . 1 f . . . . . . . 
    . . . . . . . f 2 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . 8 2 . . . . . . . 
    . . . . . . 8 8 1 a . . . . . . 
    . . . . . . 8 2 1 a . . . . . . 
    . . . . . f f f a a a . . . . . 
    . . . . 8 8 2 2 2 1 a a . . . . 
    . . 8 f f f f f a a f f a a . . 
    . 8 8 8 8 a a 2 2 2 2 1 2 a a . 
    8 8 8 8 8 8 a a 2 2 2 1 2 2 a a 
    1 1 8 8 8 8 a a 2 2 2 2 1 2 a a 
    `, SpriteKind.Player)
mySprite.setPosition(78, 102)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
info.setLife(5)
game.onUpdateInterval(1000, function () {
    BOLA_DE_FUEGO = sprites.create(img`
        . . . . . . . 2 . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 2 4 5 4 2 2 . . . . . 
        . . . . 2 2 4 5 4 2 2 . . . . . 
        . . . 2 2 4 4 5 4 4 2 2 . . . . 
        . . . 2 2 4 4 5 4 4 2 2 . . . . 
        . . . 2 2 4 4 5 4 4 2 2 . . . . 
        . . . 2 2 4 5 5 5 4 2 2 . . . . 
        . . . 2 2 4 5 5 5 4 2 2 . . . . 
        . . . 2 2 4 5 5 5 4 2 2 . . . . 
        . . . 2 2 4 5 5 5 4 2 2 . . . . 
        . . . 2 2 4 5 5 5 4 2 2 . . . . 
        . . . 2 2 4 4 5 4 4 2 2 . . . . 
        . . . . 2 2 4 4 4 2 2 . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        `, SpriteKind.Player)
    BOLA_DE_FUEGO.x += randint(0, scene.screenWidth())
    BOLA_DE_FUEGO.setKind(SpriteKind.Enemy)
})
