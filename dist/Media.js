"use strict";
class Media {
}
class Audi extends Media {
    play() {
        console.log("Playing audio.");
    }
}
class Video extends Media {
    play() {
        console.log("Playing video.");
    }
}
// Использование
const mediaItems = [new Audi(), new Video()];
mediaItems.forEach((item) => item.play());
