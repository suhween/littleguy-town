// Database Module
// This will handle fetching and managing little guy data

class LittleGuyDatabase {
    constructor() {
        this.dataPath = 'data/little-guys.json';
        this.guys = [];
    }

    // Load all little guys from the database
    async loadAll() {
        try {
            const response = await fetch(this.dataPath);
            const data = await response.json();
            this.guys = data.little_guys;
            return this.guys;
        } catch (error) {
            console.error('Error loading little guys:', error);
            return [];
        }
    }

    // Get a specific little guy by ID
    getById(id) {
        return this.guys.find(guy => guy.id === id);
    }

    // Filter little guys by creator
    getByCreator(creator) {
        return this.guys.filter(guy => guy.creator === creator);
    }

    // Add a new little guy
    async add(littleGuy) {
        // TODO: Send to backend API
        this.guys.push(littleGuy);
        console.log('Added new little guy:', littleGuy);
    }

    // Search little guys by name or features
    search(query) {
        // TODO: Implement search functionality
        return this.guys.filter(guy =>
            guy.name.toLowerCase().includes(query.toLowerCase())
        );
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LittleGuyDatabase;
}
