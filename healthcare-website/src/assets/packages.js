import bloodIcon from '../assets/images/blood icon.png'
import brainIcon from '../assets/images/brain icon.png'
import immuneIcon from '../assets/images/immune.png'
import thyroidIcon from '../assets/images/thyroid.png'

const Packages = [
    {
        id: 1,
        image: bloodIcon,
        name: "Blood Test",
        paragraph: "Accurate and fast blood testing for overall health monitoring.",
        rating: 4,
        price: "$50"
    },

    {
        id: 2,
        image: brainIcon,
        name: "Brain Scan",
        paragraph: "Detailed imaging to detect and diagnose neurological conditions.",
        rating: 5,
        price: "$200"
    },

    {
        id: 3,
        image: immuneIcon,
        name: "Immune Checkup",
        paragraph: "Comprehensive analysis of your immune system’s strength.",
        rating: 4,
        price: "$120"
    },

    {
        id: 4,
        image: thyroidIcon,
        name: "Thyroid Panel",
        paragraph: "Advanced thyroid hormone testing to assess gland health.",
        rating: 5,
        price: "$80"
    }
]

export default Packages;