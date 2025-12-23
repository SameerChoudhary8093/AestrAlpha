const fs = require('fs');
const path = require('path');

function resolveConflict(filePath) {
    console.log(`Processing ${filePath}`);
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const lines = content.split('\n');

        let newLines = [];
        let state = 'NORMAL'; // NORMAL, HEAD, INCOMING

        for (const line of lines) {
            if (line.trim().startsWith('<<<<<<< HEAD')) {
                state = 'HEAD';
                continue;
            } else if (line.trim().startsWith('=======')) {
                if (state === 'HEAD') {
                    state = 'INCOMING';
                } else {
                    // unexpected, but treat as incoming start if not in head
                    state = 'INCOMING';
                }
                continue;
            } else if (line.trim().startsWith('>>>>>>>')) {
                state = 'NORMAL';
                continue;
            }

            if (state === 'NORMAL') {
                newLines.push(line);
            } else if (state === 'INCOMING') {
                newLines.push(line);
            } else if (state === 'HEAD') {
                // Skip HEAD content
            }
        }

        fs.writeFileSync(filePath, newLines.join('\n'), 'utf-8');
        console.log(`Resolved ${filePath}`);

    } catch (e) {
        console.error(`Error processing ${filePath}: ${e.message}`);
    }
}

const baseDir = String.raw`c:\Users\samee\OneDrive\Desktop\AESTR-ALPHA\AestrAlpha\src\app`;
const filesToFix = [
    path.join(baseDir, "apple-ecosystem-residency", "page.tsx"),
    path.join(baseDir, "modern-enterprise-backend-residency", "page.tsx")
];

filesToFix.forEach(resolveConflict);
