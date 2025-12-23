import os

def resolve_conflict_accept_incoming(file_path):
    print(f"Processing {file_path}")
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        new_lines = []
        state = 'NORMAL' # NORMAL, HEAD, INCOMING
        
        for line in lines:
            if line.startswith('<<<<<<< HEAD'):
                state = 'HEAD'
                continue
            elif line.startswith('======='):
                if state == 'HEAD':
                    state = 'INCOMING'
                else:
                    # Depending on diff3 or other formats, ======= might appear. 
                    # Assuming standard format: HEAD then INCOMING.
                    state = 'INCOMING' 
                continue
            elif line.startswith('>>>>>>>'):
                state = 'NORMAL'
                continue
            
            if state == 'NORMAL':
                new_lines.append(line)
            elif state == 'INCOMING':
                new_lines.append(line)
            elif state == 'HEAD':
                # Skip HEAD content
                pass
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print(f"Resolved {file_path}")
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

base_dir = r"c:\Users\samee\OneDrive\Desktop\AESTR-ALPHA\AestrAlpha\src\app"
files_to_fix = [
    os.path.join(base_dir, "apple-ecosystem-residency", "page.tsx"),
    os.path.join(base_dir, "modern-enterprise-backend-residency", "page.tsx")
]

for file_path in files_to_fix:
    resolve_conflict_accept_incoming(file_path)
