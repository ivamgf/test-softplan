import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Head from '../components/Head'

describe('AppMarvel', () => {
    it('should return head', () => {
        render(<Head />);
        const title = screen.getByText('Marvel App');
        expect(title).toBeInTheDocument();
    });
  });