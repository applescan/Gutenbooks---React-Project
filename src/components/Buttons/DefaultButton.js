import Button from 'react-bootstrap/Button';

function DefaultButton(props) {

    return (
        <>
            <style type="text/css">
                {`
                    .btn-red {
                    border-color: #E54F6D;
                    color: #E54F6D;
                    }

                    .btn-red:hover {
                        border-color: #E54F6D;
                        background-color:#E54F6D;
                        color: #fff;
                        }

                    .btn-sml {
                    font-size: 0.7rem;
                    }
    `}
            </style>

            <Button variant="red" size="sml" onClick={props.onClick}>
                {props.name}
            </Button>
        </>
    );
}

export default DefaultButton;