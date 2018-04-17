
export interface Environment 
{
	imagePath:string;
	endPoint:string;
}

export const DEV: Environment = {
	imagePath:'http://18.220.97.146/barber/img/',
	endPoint:'http://18.220.97.146/barber/WebServices/'
}

export const ENV: Environment = DEV; 

// sPoint:'http://europa.promaticstechnologies.com/barber/WebServices/' 