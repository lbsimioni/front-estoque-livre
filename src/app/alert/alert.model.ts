export interface Alert {
  id?: number;
  message: string;
  level: 'success' | 'warn' | 'error';
}
