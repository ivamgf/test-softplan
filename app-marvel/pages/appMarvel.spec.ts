// Testing Render Component
import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Home from './index';

describe('AppMarvel', () => {
    it('should return title', () => {
        //render(<Home />);
        const title = screen.getByText('Marvel App');
        expect(title).toBeInTheDocument();
    });
  });
