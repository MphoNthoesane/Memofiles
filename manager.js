// 1. Get all the clickable menu items
        const menuItems = document.querySelectorAll('.menu-item');
        // 2. Get all the content blocks
        const contentBlocks = document.querySelectorAll('.content-block');

        // 3. Loop through each menu item and add an event listener
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                // Get the ID of the content block to show from the 'data-target' attribute
                const targetId = item.getAttribute('data-target');

                // --- Manage Active Class for Menu Items ---
                // a. Remove 'active' class from all menu items
                menuItems.forEach(i => i.classList.remove('active'));
                // b. Add 'active' class to the clicked item
                item.classList.add('active');

                // --- Manage Visibility for Content Blocks ---
                // a. Hide all content blocks (remove 'visible' class)
                contentBlocks.forEach(block => block.classList.remove('visible'));

                // b. Show the target content block (add 'visible' class)
                const targetBlock = document.getElementById(targetId);
                if (targetBlock) {
                    targetBlock.classList.add('visible');
                }
            });
        });

//buttons to control
back_btn = document.getElementById("back-btn")
flight_choose = document.getElementById("choose-flight")
notam_choose = document.getElementById("choose-notam")
atn_choose = document.getElementById("choose-atn")
container = document.getElementById("container")


back_btn.onclick = function(){
    
    location.reload()
}

document.getElementById("flight").onclick = function(){
    back_btn.style.visibility = "visible"
    container.style.visibility = "hidden"
    flight_choose.style.visibility = "visible"
    flight_choose.style.position = "relative"
    
    
}

document.getElementById("notam").onclick = function(){
    back_btn.style.visibility = "visible"
    container.style.visibility = "hidden"
    notam_choose.style.visibility = "visible"
    notam_choose.style.position = "relative"
    
    
    
}

document.getElementById("atn").onclick = function(){
    back_btn.style.visibility = "visible"
    container.style.visibility = "hidden"
    atn_choose.style.visibility = "visible"
    atn_choose.style.position = "relative"
    
    
}


//SHifts
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const text_shift = document.getElementById('text_shift');
    const shift_addBtn = document.getElementById('shift_addBtn');
    const shift_List = document.getElementById('shift_List');
    const clearBtn = document.getElementById('clearBtn');
    
    // Initialize the list from localStorage
    loadList();
    
    // Event Listeners
    shift_addBtn.addEventListener('click', addItem);
    text_shift.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addItem();
        }
    });
    clearBtn.addEventListener('click', clearList);
    
    // Functions
    function addItem() {
        alert("Shift added")
        const itemText = text_shift.value.trim();
        
        if (itemText) {
            // Add to localStorage
            const items = getItemsFromStorage();
            items.push(itemText);
            localStorage.setItem('items', JSON.stringify(items));
            
            // Add to UI
            addItemToDOM(itemText);
            
            // Clear input
            text_shift.value = '';
        }
    }
    
    function addItemToDOM(itemText) {
        const li = document.createElement('li');
        
        li.innerHTML = `
            <span>${itemText}</span>&nbsp;&nbsp;
        <button type="button" id="" class="take-btn">Take</button>
        
        `;
        
        //testing take
        li.querySelector('.take-btn').addEventListener('click', function() {
           name = prompt("Name: ")
           
            li.innerHTML = `
            <span>${itemText}</span> =>
            (${name} wants the shift)
            <button class="delete-btn">Delete</button> 
        ` ;
        li.querySelector('.delete-btn').addEventListener('click', function() {
            delete_password = prompt("Enter password: ")
            if(delete_password=="SUKDEV" || delete_password=="MOETI"){
                alert("Shift has been removed")
                removeItem(itemText, li);
            }
            else{
                alert("Not authorized!!")
            }
        });
        
        });

        // Add delete event to the button
        
        
        shift_List.appendChild(li);
    }
    
    function removeItem(itemText, liElement) {
        // Remove from localStorage
        let items = getItemsFromStorage();
        items = items.filter(item => item !== itemText);
        localStorage.setItem('items', JSON.stringify(items));
        
        // Remove from UI
        liElement.remove();
    }
    
    function clearList() {
        if (confirm('Are you sure you want to clear all items?')) {
            // Clear localStorage
            localStorage.removeItem('items');
            
            // Clear UI
            shift_List.innerHTML = '';
        }
    }
    
    function loadList() {
        const items = getItemsFromStorage();
        
        items.forEach(item => {
            addItemToDOM(item);
        });
    }
    
    function getItemsFromStorage() {
        let items;
        
        if (localStorage.getItem('items') === null) {
            items = [];
        } else {
            items = JSON.parse(localStorage.getItem('items'));
        }
        
        return items;
    }
});

//Buttons for shifts
adding_shifts = document.getElementById("adding-shifts")
check_shifts = document.getElementById("check-shifts")

document.getElementById("shifts_available").onclick = function(){
    back_btn.style.visibility = "visible"
    container.style.visibility = "hidden"
    check_shifts.style.visibility = "visible"
    check_shifts.style.position = "relative"
}
document.getElementById("shifts_add").onclick = function(){
    back_btn.style.visibility = "visible"
    container.style.visibility = "hidden"
    adding_shifts.style.visibility = "visible"
    adding_shifts.style.position = "relative"

    
}

//Announcements
type_of_announcement = document.getElementById("type-of-announcements")

document.getElementById("read-announcements").onclick = function(){
    back_btn.style.visibility = "visible"
    container.style.visibility = "hidden"
    type_of_announcement.style.visibility = "visible"
    type_of_announcement.style.position = "relative"

}

//sign memo
main_window = document.getElementById("main_window");
login_container = document.getElementById("login-container");
container_sign =  document.getElementById("container_sign");




document.getElementById("sign_memo").onclick = function(){
    document.body.style.backgroundColor = "white"
    document.body.style.backgroundImage = "none"
    container_sign.style.visibility = "visible"
    container_sign.style.position = "relative"
    login_container.style.visibility = "hidden"
    main_window.style.visibility = "hidden"
    main_window.style.position = "absolute"
    container.style.visibility = "hidden"
    container.style.position = "absolute"
    flight_choose.style.visibility = "hidden"
    flight_choose.style.position = "absolute"
    back_btn.style.visibility = "hidden"
    back_btn.style.position = "absolute"
}

document.getElementById("add_new_memo").onclick = function(){
    password = prompt("Enter password: ")

    if(password=="SUKDEV" || password=="MOETI"){  
        window.location.href = "briefadd.html"
    }else{
        alert("Not authorized!!")
        return
    }
}