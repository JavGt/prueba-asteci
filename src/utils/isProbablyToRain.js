/**
 * probabilityofprecip >60 ||relativehumidity > 50
 */

export const isProbablyToRain = (probabilityofprecip, relativehumidity) =>
	probabilityofprecip > 60 || relativehumidity > 50;
