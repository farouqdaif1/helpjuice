# 📝 Rich Text Block Editor

A modern, block-based rich text editor inspired by Notion, built with vanilla JavaScript, HTML, and CSS. This editor allows users to create dynamic content blocks with an intuitive slash command interface.

![Editor Demo](https://luminous-sprite-9b8998.netlify.app/)

## ✨ Features

- **Block-Based Editing**: Create content in individual, manageable blocks
- **Slash Commands**: Type `/1` to create heading blocks instantly
- **Dynamic Interface**: Real-time dropdown suggestions and block creation



## 🚀 Demo

### Creating Headings
1. Type `/1` in any input field
2. Press `Enter` or click the dropdown option
3. Enter your heading text and press `Enter`
4. A new input block automatically appears below

### Text Blocks
- Simply type regular text and press `Enter` to create new blocks
- Use `/1YourHeadingText` format for quick heading creation

## 🛠️ Installation


### Quick Start
1. **Clone the repository**
   ```bash
   git clone https://github.com/farouqdaif1/helpjuice
   cd helpjuice
   ```

2. **Open in browser**
   ```bash
    Direct file opening
   open index.html

   ```

3. **Start editing!**
   - Click in the input field
   - Type `/1` to create a heading
   - Press `Enter` and start typing

## 📖 Usage Guide

### Basic Commands

| Command | Action | Example |
|---------|--------|---------|
| `/1` | Create heading block | Type `/1` → Press Enter → Type "My Heading" |
| `/1Text` | Quick heading | Type `/1Hello World` → Press Enter |
| Regular text | Create text block | Type "Regular paragraph" → Press Enter |

## 🏗️ Project Structure

```
rich-text-editor/
├── index.html          # Main HTML structure
├── style.css           # All styling and responsive design
├── index.js            # Core JavaScript functionality
└── README.md           # Project documentation
```

### File Breakdown

- **`index.html`**: Contains the page structure, navigation, and initial input field
- **`style.css`**: Complete styling including dropdown, blocks, and responsive layout
- **`index.js`**: Event handling, block creation, and editor functionality

## ⚙️ Technical Details

### Technologies Used
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with Flexbox and responsive design
- **Vanilla JavaScript**: No frameworks, pure ES6+ features
- **Font Awesome 6.5.1**: Icon library for UI elements

### Key Functions

```javascript
// Core functionality
addEventListenerToInput(inputElement)     // Attach events to inputs
generateDropdownOptions(inputElement)    // Show/hide suggestions
generateNewNextInput(afterElement)       // Create new blocks
```



## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
