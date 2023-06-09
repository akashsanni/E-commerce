

export function fetchItems() {

    return fetch('/api/v1/carts/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzFlNjc2NzUwNmRhZmE1MmNmYjJlOSIsImlhdCI6MTY4NTU0MTkyMSwiZXhwIjoxNjg2NDA1OTIxfQ.USyBvvKSohTGbrAdU-OrTtGyKiREeJbUkM1d_k4AX5Y'
      },
    })

}

export function addItem(itemID) {
    return fetch(`/api/v1/carts/${itemID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzFlNjc2NzUwNmRhZmE1MmNmYjJlOSIsImlhdCI6MTY4NTU0MTkyMSwiZXhwIjoxNjg2NDA1OTIxfQ.USyBvvKSohTGbrAdU-OrTtGyKiREeJbUkM1d_k4AX5Y'
        },
      })
}
export function updateItem( {itemId , count} ){
  console.log(itemId,count)
  return fetch(`/api/v1/carts/${itemId}`, {
    method: 'PATCH',
    body: JSON.stringify({
     count
  }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzFlNjc2NzUwNmRhZmE1MmNmYjJlOSIsImlhdCI6MTY4NTU0MTkyMSwiZXhwIjoxNjg2NDA1OTIxfQ.USyBvvKSohTGbrAdU-OrTtGyKiREeJbUkM1d_k4AX5Y'
    },
  })
}

export function deleteItem(id){
   return fetch(`/api/v1/carts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzFlNjc2NzUwNmRhZmE1MmNmYjJlOSIsImlhdCI6MTY4NTU0MTkyMSwiZXhwIjoxNjg2NDA1OTIxfQ.USyBvvKSohTGbrAdU-OrTtGyKiREeJbUkM1d_k4AX5Y'
      },
    })
  }
