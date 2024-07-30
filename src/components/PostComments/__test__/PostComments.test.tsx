import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve inserir dois comentários corretamente', () => {
        render(<PostComment/>)

        const commentChanger = screen.getByTestId('text-change')
        fireEvent.change(commentChanger, { target: { value: "Que legal" }, })

        const add = screen.getByTestId("btn-add-comentarios")
        fireEvent.click(add)

        fireEvent.change(commentChanger, { target: { value: "Muito Bonito" }, })

        fireEvent.click(add)

        expect(screen.getAllByTestId("quant-comentarios")).toHaveLength(2)
    })
})
