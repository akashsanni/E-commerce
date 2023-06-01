// A mock function to mimic making an async request for data
import axios from "axios";

export function fetchItems() {

    return fetch('http://localhost:1200/api/v1/users/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzFlNjc2NzUwNmRhZmE1MmNmYjJlOSIsImlhdCI6MTY4NTM1MjMwNCwiZXhwIjoxNjg1NDM4NzA0fQ.38FpIkhweGELH1mBDiD70lVgGhyc011BPQ04lZafCkg'
      },
    })

}

export function addItem(itemID) {
    return fetch(`http://localhost:1200/api/v1/carts/${itemID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzFlNjc2NzUwNmRhZmE1MmNmYjJlOSIsImlhdCI6MTY4NTM1MjMwNCwiZXhwIjoxNjg1NDM4NzA0fQ.38FpIkhweGELH1mBDiD70lVgGhyc011BPQ04lZafCkg'
        },
      })
}
export function updateItem( itemID , count ){
  return fetch(`http://localhost:1200/api/v1/carts/${itemID}`, {
    method: 'PATCH',
    body: JSON.stringify({
     count: count
  }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzFlNjc2NzUwNmRhZmE1MmNmYjJlOSIsImlhdCI6MTY4NTM1MjMwNCwiZXhwIjoxNjg1NDM4NzA0fQ.38FpIkhweGELH1mBDiD70lVgGhyc011BPQ04lZafCkg'
    },
  })
}

export function deleteItem(id){
    return axios.delete(`http://localhost:8080/cart/${id}`)
}