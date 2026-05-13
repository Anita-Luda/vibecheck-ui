import { RoleBinding } from '../../contracts/abi';

export const bindRoles = (binding: RoleBinding, components: number) => {
    // Logic for 1:1 binding between roles and components
    return binding.map.slice(0, components);
};
