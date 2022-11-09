function UpdateLight(current : string) : string {
    return current == 'green' ? 'yellow' : current == 'yellow' ? 'red' : 'green'
}