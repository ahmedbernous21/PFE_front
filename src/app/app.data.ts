import { environment } from 'src/environments/environment';

const home = {
	name:'Home',
	link : '/',
	Auth : false,
}
const service = {
	name:'Services',
	link : '/services',
	Auth : false,
}
const profile = {
	name:'Profile',
	link : '/profile',
	Auth : false,
}
export const pages = [home, service, profile]
