export function truncatTitle(title: string) {
    return title.length > 12 ? title.slice(0, 12) + '...' : title;
}
