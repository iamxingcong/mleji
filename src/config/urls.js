import fetch from '@/config/fetch'

export const userlist = () => fetch('http://localhost:8002/v1/users/list')
