const move=(element) => {
    element.style.position = 'fixed'

    const moveToCoordinates = (left, bottom) => {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    const moveWithArrowKeys = (left, bottom) => {
        character.style.left = x + "px"
        character.style.bottom = y + "px"
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}