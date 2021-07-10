async function loadImage(src:string) {
    new Promise<HTMLImageElement>((resolve, reject) => {
        const img: HTMLImageElement = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    })
};