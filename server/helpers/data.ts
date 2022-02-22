type Status = {
    success: string,
    error: string
}

type Message = {
    'createSuccess': string,
    'requireParams': string,
    'errorMessage': string
}

type Data = {
    status: Status,
    message: Message
}

const data :Data = {
    status: {
        'success': 'success',
        'error': 'error'
    },
    message: {
        'createSuccess': 'Created success',
        'requireParams': 'Require params',
        'errorMessage': 'Error'
    }
}

export default data;