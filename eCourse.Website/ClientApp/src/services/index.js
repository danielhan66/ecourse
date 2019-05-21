export const api = {
  fetchAuthors: () => {
    const url = 'api/authors';

    return fetch(url)
    .then(statusHelper)
    .then(response => response.json())
    .catch(error => error)
    .then(data => {
         return data
     })
  },
  fetchCourse: (id) => {
    const url = `api/courses/${id}`;
    return fetch(url)
    .then(statusHelper)
    .then(response => response.json())
    .catch(error => error)
    .then(data => {
      console.log("data:", data);
         return data
     })
  },
  fetchCourses: (searchText) => {    
    let url = 'api/courses';
    if(searchText){
      url = `api/courses?search=${encodeURI(searchText)}`
    }
    
    return fetch(url)
    .then(statusHelper)
    .then(response => response.json())
    .catch(error => error)
    .then(data => {
         return data
     })
  },
  createCourse: (course) => {
    const url = 'api/courses';
    return fetch(
      url,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(course)
      }
    )
    .then(statusHelper)
    .then(response => response.json())
    .catch(error => error)
    .then(data => {
         return data
     });
  },
  updateCourse: (course) => {
    const url = 'api/courses';
    return fetch(
      url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(course)
      }
    )
    .then(statusHelper)
    .then(response => response.json())
    .catch(error => error)
    .then(data => {
         return data
     });
  },
  deleteCourse: (id) => {
    const url = `api/courses/${id}`;
    return fetch(
      url,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    .then(statusHelper)
    .then(response => response.json())
    .catch(error => error)
    .then(data => {
         return data
     });
  },
};

function statusHelper (response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}