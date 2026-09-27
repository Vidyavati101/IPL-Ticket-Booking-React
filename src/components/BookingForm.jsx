function BookingForm() {
    return (
        <section>
            <h2>Book Your Ticket</h2>

            <form>
                <input type="text" placeholder="Enter your name" />
                <input type="email" placeholder="Enter your email" />
                <input type="number" placeholder="Number of tickets" />

                <button type="submit">Book Ticket</button>
            </form>
        </section>
    );
}

export default BookingForm;