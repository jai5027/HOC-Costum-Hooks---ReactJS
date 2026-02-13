export const Card = ( Component ) => {
    return () => {
        return (
            <div className="p-10 bg-gray-600 rounded-4xl">
            <Component />
            </div>
        )
    }
}