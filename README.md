# Task Tracker CLI

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
npm install -g task-tracker
```

Or clone and install locally:

```bash
git clone https://github.com/yourusername/task-tracker.git
cd task-tracker
npm install
npm link
```

## Usage

```bash
task add              # Add a new task
task list            # List all tasks
task list -s pending # List pending tasks
task complete    # Mark a task as completed
task delete      # Delete a task
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

## License

This project is licensed under the MIT License - see the LICENSE file for details.