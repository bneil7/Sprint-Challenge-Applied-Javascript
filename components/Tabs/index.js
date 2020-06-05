// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

function Tabs() {
    const tabs = document.querySelector('.tabs')
    
    const topics = document.querySelector('.topics')

    const tab = document.createElement('div')
    tab.classList.add('tab')

    tabs.appendChild(topics)
    topics.appendChild(tab)


    axios.get('https://lambda-times-backend.herokuapp.com/topics')
        .then(response => {
        // debugger
        console.log('saul goodman', response.data.topics);

        response.data.topics.forEach(item =>{
            tabs.append(Tabs)
        })
        // create new tab forEach topic
        // append to DOM under .topics
        })
        .catch(error => {
        // debugger
        console.log('something went wrong', error)
        },[])

        console.log('right after the whole promise thing')

    return tabs;
}

Tabs();
