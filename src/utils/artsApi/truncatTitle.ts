export function truncatTitle(title: string) {
    return title.length > 16 ? title.slice(0, 16) + '...' : title;
}
