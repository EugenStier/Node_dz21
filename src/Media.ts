abstract class Media {
  abstract play(): void;
}

class Audi extends Media {
  play(): void {
    console.log("Playing audio.");
  }
}

class Video extends Media {
  play(): void {
    console.log("Playing video.");
  }
}

// Использование
const mediaItems: Media[] = [new Audi(), new Video()];
mediaItems.forEach((item) => item.play());
