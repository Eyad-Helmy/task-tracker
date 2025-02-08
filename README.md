# Task Tracker CLI
https://roadmap.sh/projects/task-tracker
A modern command-line task management application built with Node.js and ES modules.

## Features

- Built with modern ES modules
- Interactive command-line interface
- Color-coded output for better readability
- Task management (add, list, complete, delete)
- Status filtering
- Persistent storage using JSON

## Installation

```bash
npm install -g tasktrack
```

Or clone and install locally:

```bash
git clone https://github.com/yourusername/task-tracker.git
cd task-tracker
npm install
npm link    #to use globally
```

## Usage

```bash
task add              # Add a new task
task list            # List all tasks
task list '[pending / completed]' # List pending / completed tasks
task complete '<id>'     # Mark a task as completed (can be input as string or number)
task delete '<id>'     # Delete a task  (can be input as string or number)
task --help          # Show help menu
```

## Project Structure

```
task-tracker/
├── package.json      # Project metadata and dependencies
├── index.js         # CLI entry point
├── tasks.json       # Task storage
└── lib/
    ├── taskManager.js # Task management logic
    └── fileHelper.js  # File operations
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
