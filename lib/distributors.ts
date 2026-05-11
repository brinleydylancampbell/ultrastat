export interface Distributor {
  id: string
  name: string
  territory: string
  country: string
  lat: number
  lng: number
  contactUrl?: string
  active: boolean
}

export const distributors: Distributor[] = [
  {
    id: 'uk-south-east',
    name: 'South East Distributor',
    territory: 'South East England',
    country: 'UK',
    lat: 51.1,
    lng: 0.2,
    active: true,
  },
  {
    id: 'uk-midlands',
    name: 'Midlands Distributor',
    territory: 'Midlands',
    country: 'UK',
    lat: 52.5,
    lng: -1.8,
    active: true,
  },
  {
    id: 'uk-north-west',
    name: 'North West Distributor',
    territory: 'North West England',
    country: 'UK',
    lat: 53.5,
    lng: -2.3,
    active: true,
  },
]

export const seekingDistributors = [
  'Republic of Ireland',
  'Germany',
  'France',
  'Netherlands',
  'Spain',
  'Italy',
  'Australia',
  'United States',
  'Canada',
]
