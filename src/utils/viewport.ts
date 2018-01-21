export interface IBoundary {
    from: number;
    to: number;
}

function getOffsetTop(elId: string): number {
    return document.getElementById(elId).offsetTop;
}

export function getBoundariesForHtmlElements(elementsId: string[]): IBoundary[] {
    const elementsBoundaries = [];
    
    for (let i = 0; i < elementsId.length; i++) {

        const elBoundary = {
            from: Number.MIN_VALUE,
            to: Number.MAX_VALUE
        };

        if (i !== 0 && i !== elementsId.length - 1) {
            elBoundary.from = getOffsetTop(elementsId[i]);
            elBoundary.to = getOffsetTop(elementsId[i + 1]);
        } else if (i === 0) {
            elBoundary.to = getOffsetTop(elementsId[i + 1]);
        } else if (i === elementsId.length - 1) {
            elBoundary.from = getOffsetTop(elementsId[i]);
        }

        elementsBoundaries.push(elBoundary);
    }

    return elementsBoundaries;
}

export function isInBoundaries(num: number, boundary: IBoundary): boolean {
    return boundary.from <= num && boundary.to >= num;
}