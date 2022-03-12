import { Button, Col, Icon, isBusy, Row, Span } from '../../../src';

describe('examples', () => {
  test('all props with label and icon', () => {
    const component = Button({
      busyWhen: isBusy('my_collection'),
      className: 'primary',
      icon: 'cil-check-circle',
      isSubmit: true,
      label: 'Submit',
      outline: false,
    });

    const json = {
      _type: 'Button',
      props: {
        busyWhen: '$..busy[?(@.id=="my_collection")]',
        className: 'primary',
        icon: 'cil-check-circle',
        isSubmit: true,
        label: 'Submit',
        outline: false,
      },
    };

    expect(JSON.stringify(component)).toEqual(JSON.stringify(json));
  });

  test('all props with content', () => {
    const component = Button({
      busyWhen: isBusy('my_collection'),
      className: 'primary',
      content: Row({
        children: [
          Col({
            children: [Icon({ name: 'cil-check-circle' })],
          }),
          Col({
            children: [Span({ content: 'Submit' })],
          }),
        ],
      }),
      isSubmit: true,
      outline: false,
    });

    const json = {
      _type: 'Button',
      props: {
        busyWhen: '$..busy[?(@.id=="my_collection")]',
        className: 'primary',
        content: {
          _type: 'Row',
          props: {
            children: [
              {
                _type: 'Col',
                props: {
                  children: [
                    {
                      _type: 'Icon',
                      props: {
                        name: 'cil-check-circle',
                      },
                    },
                  ],
                },
              },
              {
                _type: 'Col',
                props: {
                  children: [
                    {
                      _type: 'Span',
                      props: {
                        content: 'Submit',
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        isSubmit: true,
        outline: false,
      },
    };

    expect(JSON.stringify(component)).toEqual(JSON.stringify(json));
  });
});
