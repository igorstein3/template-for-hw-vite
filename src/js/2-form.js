'use strict'
const STORAGE_KEY = 'feedback-form-state';
function loadFromLS(key) {
    const body = localStorage.getItem(key);
    try {
        const data = JSON.parse(body);
        return data;
    }
    catch (err) {
        console.log(err);
            return body;
        }
    }
function saveToLS(key, value) {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
}
const refs = {
    form: document.querySelector(".feedback-form")
}
refs.form.addEventListener('input', (e) => {
    const email = e.currentTarget.elements.email.value.trim();
    const message = e.currentTarget.elements.message.value.trim();
    const formData = {email, message}
    saveToLS(STORAGE_KEY, formData);
})
function initPage() {
    const initPageFormData = loadFromLS(STORAGE_KEY);
    refs.form.elements.email.value = initPageFormData?.email || '';
    refs.form.elements.message.value = initPageFormData?.message|| '';
}
initPage();
refs.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.currentTarget.elements.email.value.trim();
    const message = e.currentTarget.elements.message.value.trim();
    const formData = { email, message };
    if (formData.email === '') { alert('Fill please all fields') }
    else if (formData.message === '') 
    { alert('Fill please all fields') } else {
        console.log(formData)
        e.target.reset();
        localStorage.removeItem(STORAGE_KEY);
    };  
})
;