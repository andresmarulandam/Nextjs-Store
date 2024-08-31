import React from 'react';

interface CategoryParams {
  params: {
    categories: string[];
    searchParams?: string;
  };
}
export default function Category(props: CategoryParams) {
  const { categories } = props.params;
  return <h1>Categoria Dinamica: {categories}</h1>;
}
