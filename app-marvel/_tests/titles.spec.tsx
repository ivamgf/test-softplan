import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Titles from '../components/Titles'

describe('AppMarvel', () => {
    it('should return title', () => {
        render(<Titles />);
        const title = screen.getByText('Welcome to Marvel Comics!');
        expect(title).toBeInTheDocument();
    });

    it('should return subTitle', () => {
        render(<Titles />);
        const Subtitle = screen.getByText('Great Marvel Characters!');
        expect(Subtitle).toBeInTheDocument();
    });
  });