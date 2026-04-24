function getLastItem<T>(items: T[]): T | undefined {
    return items[items.length - 1];
}

function findById<T>(items: T[], id: string): T | undefined {
    return items.find(item => item['id'] === id);
}



export { getLastItem, findById };