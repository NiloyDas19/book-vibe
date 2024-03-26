
const FAQ = () => {
    return (
        <div className="space-y-10">
            <div className="text-center space-y-5">
                <h2 className="text-3xl md:text-5xl font-bold border-2 rounded-2xl border-[#23BE0A] p-4">Frequently Asked Questions (FAQ)</h2>
                <p className="text-xl font-light">Welcome to our FAQ section, where we address common inquiries to ensure a seamless experience for our users. Here, you'll find answers to frequently asked questions about our platform and its features. Whether you're curious about how to navigate our website, understand our services, or troubleshoot any issues, we're here to help. Explore our comprehensive FAQs to gain insights into topics such as account management, book recommendations, community engagement, and more. If you don't find the information you're looking for, feel free to reach out to our dedicated support team for personalized assistance. At BookVibe, we're committed to providing you with the resources and support you need to make the most of your reading journey.</p>
            </div>
            <div  className="space-y-1 text-white">
                <div className="collapse collapse-arrow bg-[#59C6D2]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-bold">
                        How do I navigate to the home page?
                    </div>
                    <div className="collapse-content">
                        <p>You can easily navigate to the home page by clicking on the "Home" button in the navigation menu located at the top of the website.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#59C6D2]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-bold">
                        How can I view all the books available on the website?
                    </div>
                    <div className="collapse-content">
                        <p>You can view all the books in the Home page of the website</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#59C6D2]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-bold">
                        Is there a feature to track the pages I've read in a book?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, Book Vibe offers a "Pages to Read" feature where you can track the pages you've read in a book. </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#59C6D2]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-bold">
                        How are the top five books selected on the website?
                    </div>
                    <div className="collapse-content">
                        <p>The top five books are selected based on user ratings. Books with the highest ratings from users are featured in the top five section to highlight popular and highly acclaimed titles.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#59C6D2]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-bold">
                        Can I create a personalized reading list on Book Vibe?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, you can create personalized reading lists on Book Vibe. You can find all the read books and wishlist books in the Listed Books page. </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#59C6D2]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-bold">
                    Is there a mobile app available for Book Vibe?
                    </div>
                    <div className="collapse-content">
                        <p>Currently not.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;