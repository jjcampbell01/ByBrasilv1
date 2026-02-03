
import React from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  benefit: string;
  image: string;
  category: 'colegial' | 'corporativo' | 'esportivo' | 'casual' | 'industrial' | 'saude';
}

export interface Sector {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}