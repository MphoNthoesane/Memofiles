/**
 * Captures and formats the current date in South Africa Standard Time (SAST).
 * @returns {string} The formatted date string (e.g., "12 November 2025" or "2025/11/12").
 */
function getSouthAfricanDate() {
    // 1. Create a new Date object for the current moment.
    const now = new Date();

    // 2. Define formatting options, specifying the SAST timezone.
    const options = {
        // Timezone setting is crucial to ensure the date is correct for SAST
        timeZone: 'Africa/Johannesburg', 
        
        // Date components only
        year: 'numeric',
        month: 'long', // Use '2-digit' for MM, or 'short' for Nov
        day: 'numeric' // Use '2-digit' for DD
    };

    // 3. Use toLocaleDateString to format the date based on the SA locale ('en-ZA').
    // The 'en-ZA' locale formats dates nicely as 'D Month YYYY'.
    const formattedDate = now.toLocaleDateString('en-ZA', options);

    return formattedDate;
}

// Example Usage:
const saDate = getSouthAfricanDate();


setTimeout(refreshPage, 300000); //2 hours in milliseconds

function refreshPage(){
    window.location.href = "https://aimojohannesburg.co.za/"
}




// --- DATA STRUCTURE ---
        const STORAGE_KEY = 'fileManagerData';

        // Initialize or load the file list from localStorage
        let files = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

        // --- CORE FUNCTIONS ---

        /**
         * Saves a file's metadata and a temporary URL to the list and localStorage.
         */
        function addFile() {
            const titleInput = document.getElementById('file-title');
            const descriptionInput = document.getElementById('file-description');
            const fileInput = document.getElementById('file-input');

            const file = fileInput.files[0];
            const title = titleInput.value.trim() + ` [${saDate}]`;
            const description = descriptionInput.value.trim();

            if (!file || !title || !description) {
                alert('Please fill out all fields and select a file.');
                return;
            }

            // Create a temporary URL for the file to enable immediate download
            // Note: This URL is only valid for the current browser session.
            const fileUrl = URL.createObjectURL(file);

            const newFile = {
                id: Date.now(), // Use timestamp as a unique ID
                title: title,
                description: description,
                fileName: file.name,
                mimeType: file.type,
                // We save the temporary URL and the original file object (as a data URL)
                // in a separate global map for handling download, since localStorage
                // cannot store large file objects.
                tempUrl: fileUrl 
            };
            
            files.push(newFile);
            saveFiles();
            renderFileList();

            // Clear inputs
            titleInput.value = '';
            descriptionInput.value = '';
            fileInput.value = ''; // Clears the selected file
            alert(`File "${title}" saved ✅`);
        }

        /**
         * Saves the current files array to localStorage.
         */
        function saveFiles() {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(files));
        }

        /**
         * Renders the list of files in the DOM.
         */
        function renderFileList() {
            const listContainer = document.getElementById('file-list');
            listContainer.innerHTML = '';
            
            if (files.length === 0) {
                listContainer.innerHTML = '<p id="no-files-message">No files uploaded yet.</p>';
                return;
            }

            files.forEach(file => {
                const item = document.createElement('div');
                item.className = 'file-item';
                item.setAttribute('data-id', file.id);

                // Title and Description (Hover functionality)
                item.innerHTML = `
                    <div class="file-title">📄 ${file.title} (${file.fileName})</div>
                    <div class="file-description">${file.description}</div>
                    <div class="file-actions">
                        <button onclick="downloadFile(${file.id})">Download</button>
                        <button onclick="deleteFile(${file.id})" >Delete</button>
                    </div>

                `;

                  if(listContainer.children.length>0){
                    listContainer.insertBefore(item,listContainer.firstElementChild)

                }
                else{
                    listContainer.appendChild(item);
                }

            });
        }

        /**
         * Initiates the download of a file using its temporary URL.
         * @param {number} id - The ID of the file to download.
         */
        function downloadFile(id) {
            const file = files.find(f => f.id === id);

            if (file && file.tempUrl) {
                // Create a temporary anchor element
                const a = document.createElement('a');
                a.href = file.tempUrl;
                a.download = file.fileName; // Use the original file name
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                
                // IMPORTANT: The browser manages the Blob object referenced by tempUrl. 
                // We are not able to revoke it here since the file object itself 
                // isn't stored in localStorage.
            } else {
                alert('File link expired. Please upload the file again to create a new download link.');
            }
        }

        /**
         * Deletes a file's metadata from the list and localStorage.
         * @param {number} id - The ID of the file to delete.
         */
        function deleteFile(id) {
            password = prompt("Enter the password")

            if(password=="SUKDEV" || password=="MOETI"){
                // Find the file to potentially revoke its temporary URL
            const fileToDelete = files.find(f => f.id === id);
            
            // Filter out the file to delete
            files = files.filter(f => f.id !== id);
            
            // Update localStorage
            saveFiles();
            
            // Clean up the temporary URL resource if it exists
            if (fileToDelete && fileToDelete.tempUrl) {
                URL.revokeObjectURL(fileToDelete.tempUrl);
            }
            
            // Re-render the list
            renderFileList();
            alert('File deleted successfully.');
            }else{
                alert("Not authorized")
            }
        }

        // --- INITIALIZATION ---
        window.onload = renderFileList;