import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Footer from '../components/Footer'

describe('AppMarvel', () => {
    it('should return alt text image', () => {
        render(<Footer />);
        const logo = screen.getByAltText('Vercel Logo')
        expect(logo).toBeInTheDocument();
    });
  });