import React from 'react';
import Main from './index';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Main page', () => {
  test('Check form-wrapper to be in the document', () => {
    render(<Main />);
    const formWrapper = screen.getByTestId('form-wrapper');
    expect(formWrapper).toBeInTheDocument();
  });

  test('Check activity item to be null by default', () => {
    render(<Main />);
    const activityItem = screen.queryByTestId('activity-item');
    expect(activityItem).toBeNull();
  });

  test('Check adding activity item', () => {
    render(<Main />);
    const textarea = screen.queryByTestId('textarea');
    expect(screen.queryByTestId('textarea')).toBeInTheDocument();
    fireEvent.change(textarea as HTMLTextAreaElement, {
      target: { value: 'test note' },
    });
    expect(screen.queryByTestId('textarea')).toHaveTextContent('test note');
    fireEvent.click(screen.getByTestId('submit-note-btn'));
    expect(screen.getByTestId('activity-item')).toBeInTheDocument();
  });

  test('Check adding empty item', () => {
    render(<Main />);
    fireEvent.click(screen.getByTestId('submit-note-btn'));
    expect(screen.queryByTestId('activity-item')).toBeNull();
  });

  test('Check deleting activity item', () => {
    render(<Main />);
    const textarea = screen.queryByTestId('textarea');
    expect(screen.queryByTestId('textarea')).toBeInTheDocument();
    fireEvent.change(textarea as HTMLTextAreaElement, {
      target: { value: 'test note' },
    });
    expect(screen.queryByTestId('textarea')).toHaveTextContent('test note');
    fireEvent.click(screen.getByTestId('submit-note-btn'));
    expect(screen.getByTestId('activity-item')).toBeInTheDocument();
    const btn = screen.getByTestId('delete-activity-item-btn');
    window.confirm = jest.fn(() => true);
    fireEvent.click(btn);
    expect(screen.queryByTestId('activity-item')).toBeNull();
  });
});
