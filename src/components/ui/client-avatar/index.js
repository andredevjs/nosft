import PropTypes from "prop-types";
import clsx from "clsx";
import Image from "next/image";
import { ImageType } from "@utils/types";

const ClientAvatar = ({ slug, name, image, className }) => (
    // <Anchor
    //     path={slug}
    //     className={clsx("avatar", className)}
    //     data-tooltip={name}
    // >

    <div className={clsx("avatar", className)} data-tooltip={name}>
        <Image
            src={image.src}
            alt={image?.alt || name}
            width={image?.width || 30}
            height={image?.height || 30}
        />
    </div>

    // </Anchor>
);

ClientAvatar.propTypes = {
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: ImageType.isRequired,
    className: PropTypes.string,
};

export default ClientAvatar;
