export function renderHtml (tag, className, parentNode, index = 0) {
    const element = document.createElement(tag);
    element.classList.add(...className);
    document.querySelectorAll(parentNode)[index].append(element);
}