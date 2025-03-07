const token = '1a4b3a68c5a535d50715b70b9d463ae50cd0cdef8e3ac325'


export const server_calls = {
    get: async () => {
        const response = await fetch(`https://workout-db-1gs8.onrender.com/api/exercises`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://workout-db-1gs8.onrender.com/api/exercises`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },


    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://workout-db-1gs8.onrender.com/api/exercises/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },

    delete: async (id: string) => {
        const response = await fetch(`https://workout-db-1gs8.onrender.com/api/exercises/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
        })
        if (!response.ok) {
            throw new Error('Failed to delete data on the server')
        }

        return 
    },
}